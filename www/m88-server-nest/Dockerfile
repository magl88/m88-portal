FROM node:22.15.0-alpine

# FROM base AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

# FROM base AS runner

# WORKDIR /app

#ARG NODE_ENV=production
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}

# COPY --chown=nodejs:nodejs package.json package-lock.json ./

#RUN npm install --production
# RUN npm install

# COPY --chown=nodejs:nodejs --from=builder /app/dist ./dist
# COPY --chown=nodejs:nodejs --from=builder /app/prisma/generated ./prisma/generated

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD ["npm", "run", "dev"]