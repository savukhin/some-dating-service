package redirects

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func RedirectTo(serviceURL string) func(res http.ResponseWriter, req *http.Request) {
	return func(res http.ResponseWriter, req *http.Request) {
		fmt.Println(serviceURL)

		resp, err := http.NewRequest(req.Method, serviceURL, req.Body)

		if err != nil || resp == nil {
			res.Header().Set("Content-Type", "application/json")
			res.WriteHeader(http.StatusInternalServerError)
			var data = struct {
				Title string `json:"error"`
			}{
				Title: "cannot connect to server",
			}

			json.NewEncoder(res).Encode(data)
			return
		}

		for name, values := range resp.Header {
			for _, value := range values {
				res.Header().Add(name, value)
			}
		}

		io.Copy(res, resp.Body)
	}
}
