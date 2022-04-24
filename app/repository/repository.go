package repository

import (
	"fmt"
	"pos/util"
)

type Reader interface {
	GetUser()
}

type Creater interface {
	CreateUser()
}

type Repository interface {
	Reader
	Creater
}

func GetModel(model ...interface{}) Repository {
	fmt.Println(model)
	s := "student"
	if s == "student" {
		// return student repository
	}
	return util.NewStudent()
}
