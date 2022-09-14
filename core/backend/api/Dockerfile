FROM golang:1.18.3-alpine

WORKDIR /api
COPY . .

RUN go mod tidy
EXPOSE 4300

CMD ["go", "run", "main.go"]
