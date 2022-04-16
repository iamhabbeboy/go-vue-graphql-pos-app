package model

type ProductModel struct {
	ID          uint `gorm:"primaryKey"`
	Name        string
	Price       string
	Description *string
	Sku         *string
	Stock       *string
	CategoryID  int
	Category    Category
}
