package model

import "gorm.io/gorm"

type SaleModel struct {
	gorm.Model
	ID          int `gorm:"primaryKey"`
	Quantity    float64
	TotalAmount float64
	ProductID   int
	Product     ProductModel `gorm:"foreignKey:ProductID"`
}
