package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"pos/graph/model"
	"strconv"
)

var (
	DB *gorm.DB
)

func Connect() *gorm.DB {
	var err error
	DB, err = gorm.Open(sqlite.Open("pos.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	DB.AutoMigrate(&model.CategoryModel{})

	return DB
}

func Save(category *model.CategoryModel) *model.Category {
	DB.Create(&category)

	return &model.Category{
		Name:   category.Name,
		Parent: category.Parent,
	}
}

func GetAll() []*model.Category {
	var categories []*model.CategoryModel
	DB.Find(&categories)
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
