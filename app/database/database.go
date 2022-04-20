package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var (
	DB *gorm.DB
)

func Connect(migration ...interface{}) *gorm.DB {
	var err error
	DB, err = gorm.Open(sqlite.Open("pos.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	DB.AutoMigrate(migration...)

	return DB
}
