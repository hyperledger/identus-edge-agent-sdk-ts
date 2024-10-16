FROM node:lts-bookworm

# Install dependencies for Rust, wasm-pack, and glibc development headers
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    build-essential \
    ca-certificates \
    git \
    pkg-config \
    libssl-dev \
    libc6-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Rust using rustup
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

# Set environment variables for Rust
ENV PATH="/root/.cargo/bin:${PATH}"

# Install wasm-pack using Cargo
RUN cargo install wasm-pack
ENV WASM_BINDGEN_PATH="/root/.cargo/bin/wasm-bindgen"

# Set the working directory inside the container
WORKDIR /app
VOLUME /app/build

# Copy package.json and package-lock.json
# to leverage Docker cache
COPY ./*.sh ./
COPY package*.json ./
COPY patches ./patches
COPY externals ./externals
COPY *.js ./
COPY *.mjs ./
COPY *.json ./
COPY src ./src


RUN git init
# Install entrypoint script
COPY ./.docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh


# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]