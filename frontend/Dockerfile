# Base stage for dependencies
FROM node:18-alpine 
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY next.config.js .env tsconfig.json  next-env.d.ts ./
COPY tailwind.config.ts  postcss.config.mjs ./
RUN npm install
RUN npx prisma generate
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000
EXPOSE 5555
CMD ["npm", "run", "dev"]

