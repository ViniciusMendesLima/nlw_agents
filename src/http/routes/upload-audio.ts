import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { generateEmbeddings, trascribeAdio } from "../../services/gemini.ts";
import { schema } from "../../db/schema/index.ts";
import { db } from "../../db/connection.ts";

export const uploudAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/audio",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const audio = await request.file();

      if (!audio) {
        throw new Error("Audio is required.");
      }

      const audioBuffer = await audio.toBuffer();
      const audioAsBase64 = audioBuffer.toString("base64");

      const transcripton = await trascribeAdio(audioAsBase64, audio.mimetype);
      const embeddings = await generateEmbeddings(transcripton);

      const result = await db.insert(schema.audioChunks).values({
        roomId,
        transcripton,
        embeddings,
      }).returning()

      const chunk = result[0]

      if (!chunk) {
        throw new Error('Erro ao salvar chunk de áudio')
      }

      return reply.status(201).send({ chunkId: chunk.id });
    }
  );
};
