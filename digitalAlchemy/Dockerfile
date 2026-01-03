FROM node:lts-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json tsconfig.json entrypoint.sh ./

# Install dependencies
RUN npm ci

# Copy source code
COPY src/ ./src/

RUN npm run build

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

CMD ["npm", "run", "start"]