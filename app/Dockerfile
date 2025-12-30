
FROM python:3.8.20-slim AS build

WORKDIR /app

COPY requirements.txt .
RUN pip install  --no-cache-dir -r requirements.txt

COPY hello.py .

FROM python:3.8.20-slim

WORKDIR /app


RUN groupadd -r app && useradd -r -g app app # Create user 
USER app


COPY --from=build /usr/local/lib/python3.8/site-packages /usr/local/lib/python3.8/site-packages
COPY --from=build /app/hello.py .

EXPOSE 8080

CMD ["uvicorn", "hello:app", "--host", "0.0.0.0", "--port" "80" ]

