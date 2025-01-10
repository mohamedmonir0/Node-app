FROM postgres:14

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=hello_world_db
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin123

# Copy the SQL script into the container
COPY init.sql /docker-entrypoint-initdb.d/
