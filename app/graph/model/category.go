package model

type CategoryModel struct {
	ID     uint `gorm:"primaryKey"`
	Name   string
	Parent *string
}
