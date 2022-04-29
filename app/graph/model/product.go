package model

import "gorm.io/gorm"

type ProductModel struct {
	gorm.Model
	ID          int `gorm:"primaryKey"`
	Name        string
	Price       string
	Description *string
	Sku         *string
	Stock       *string
	CategoryID  int
	Category    CategoryModel `gorm:"foreignKey:CategoryID"`
}
