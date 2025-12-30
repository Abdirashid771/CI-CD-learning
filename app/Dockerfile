# Stage 2: Final image
FROM python:3.8-slim

WORKDIR /app

# Update critical packages to fix vulnerabilities
RUN apt-get update && apt-get install -y --only-upgrade libsqlite3-0 && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd -r app && useradd -r -g app -d /app app
USER app

COPY --from=build /usr/local/lib/python3.8/site-packages /usr/local/lib/python3.8/site-packages
COPY --from=build /app/hello.py .

EXPOSE 80

CMD ["uvicorn", "hello:app", "--host", "0.0.0.0", "--port", "80"]
