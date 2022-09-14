package redirects

import (
	"api/config"

	"github.com/gorilla/mux"
)

func Routes(router *mux.Router) *mux.Router {
	router.HandleFunc("/auth/{.*}", RedirectTo(config.GetAuthServiceURL()))
	router.HandleFunc("/user/{.*}", RedirectTo(config.GetUserServiceURL()))
	router.HandleFunc("/chat/{.*}", RedirectTo(config.GetChatServiceURL()))
	router.HandleFunc("/filter/{.*}", RedirectTo(config.GetFilterServiceURL()))
	router.HandleFunc("/phantom/{.*}", RedirectTo(config.GetPhantomServiceURL()))
	return router
}
