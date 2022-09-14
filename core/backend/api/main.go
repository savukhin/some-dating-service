package main

import (
	"api/redirects"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	router := r.PathPrefix("/api").Subrouter()

	redirects.Routes(router)

	credentials := handlers.AllowCredentials()
	methods := handlers.AllowedMethods([]string{"POST", "GET"})
	headers := handlers.AllowedHeaders([]string{"Content-Type", "X-Requested-With", "Authorization", "enctype"})
	ttl := handlers.MaxAge(3600)
	origins := handlers.AllowedOrigins([]string{"*"})

	log.Fatal(http.ListenAndServe(
		":4201",
		handlers.CORS(credentials, methods, origins, ttl, headers)(r),
	))
}
