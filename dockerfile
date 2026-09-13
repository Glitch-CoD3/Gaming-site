# Step 1: Use official Node.js 22 runtime
FROM node:22-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package files first to optimize build caching
COPY package.json package-lock.json ./

# Step 4: Install exact dependencies
RUN npm ci

# Step 5: Copy all application source code
COPY . .

# Step 6: Build the Vite production bundle (outputs to /dist)
RUN npm run build

# Step 7: Install 'serve' globally to host static files
RUN npm install -g serve

# Step 8: Expose port 5173 (standard Vite port)
EXPOSE 5173

# Step 9: Run 'serve' in Single Page Application (-s) mode on port 5173
CMD ["serve", "-s", "dist", "-l", "5173"]