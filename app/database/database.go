package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"pos/graph/model"
	"strconv"
)

//
//type DB struct {
//	client *gorm.DB
//}
//
//var (
//	DB *gorm.DB
//)

func Connect() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("pos.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&model.CategoryModel{})

	return db
}

func Save(db *gorm.DB, category *model.CategoryModel) *model.Category {
	db.Create(&category)

	return &model.Category{
		Name:   category.Name,
		Parent: category.Parent,
	}
}

func GetAll(db *gorm.DB) []*model.Category {
	var categories []*model.CategoryModel
	db.Find(&categories)
	var data []*model.Category

	for i := 0; i < len(categories); i++ {
		data = append(data, &model.Category{
			ID:     strconv.Itoa(int(categories[i].ID)),
			Name:   categories[i].Name,
			Parent: categories[i].Parent,
		})
	}
	return data
}
