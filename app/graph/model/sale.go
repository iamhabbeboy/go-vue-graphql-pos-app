package model

import "gorm.io/gorm"

type SaleModel struct {
	gorm.Model
	ID          int
	Quantity    float64
	TotalAmount float64
	ProductID   int
	Product     *Product `gorm:"foreignKey:ProductID"`
}
