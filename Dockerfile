FROM mcr.microsoft.com/playwright:v1.43.1

WORKDIR /app
COPY . .
RUN npm install
CMD ["npx", "playwright", "test"]
