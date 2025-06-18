# Gunakan image Node.js
FROM node:18

# Buat direktori kerja di container
WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code ke container
COPY . .

# Aplikasi berjalan di port 3000
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
