package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func GetAuthServiceURL() string {
	return os.Getenv("AUTH_SERVICE_URL")
}

func GetUserServiceURL() string {
	return os.Getenv("USER_SERVICE_URL")
}

func GetChatServiceURL() string {
	return os.Getenv("CHAT_SERVICE_URL")
}

func GetFilesaverServiceURL() string {
	return os.Getenv("FILESAVER_SERVICE_URL")
}

func GetFilterServiceURL() string {
	return os.Getenv("FILTER_SERVICE_URL")
}

func GetPhantomServiceURL() string {
	return os.Getenv("PHANTOM_SERVICE_URL")
}

func init() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatalln(err)
		return
	}
}
