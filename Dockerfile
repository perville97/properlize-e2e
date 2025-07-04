FROM mcr.microsoft.com/playwright:v1.53.2

WORKDIR /app
COPY . .
RUN npm install
CMD ["npx", "playwright", "test"]

