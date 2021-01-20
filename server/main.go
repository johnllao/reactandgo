package main

import (
	"log"
	"net/http"
)

var (
	fs http.Handler
)
func main() {
	fs = http.FileServer(http.Dir("."))

	var s = http.Server{
		Addr: "localhost:8080",
		Handler: http.HandlerFunc(roothandler),
	}
	log.Printf("starting http server")
	log.Fatal(s.ListenAndServe())
}

func roothandler(w http.ResponseWriter, r *http.Request) {
	fs.ServeHTTP(w, r)
}
