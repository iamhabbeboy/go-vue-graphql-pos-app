package model

type CategoryModel struct {
	ID     int `gorm:"primaryKey"`
	Name   string
	Parent *string
}
