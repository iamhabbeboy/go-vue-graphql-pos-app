package repository

import (
	"fmt"
	"pos/database"
	"pos/graph/model"
	"strconv"
)

type CategoryRepository interface {
	FindAll() ([]*model.Category, error)
	Save(category *model.CategoryModel) (*model.Category, error)
	Get(id int) (*model.Category, error)
	FindById(id int) (*model.Category, error)
}

type categoryService struct{}

func NewCategoryService() *categoryService {
	return &categoryService{}
}

func (c *categoryService) FindAll() ([]*model.Category, error) {
	var categories []*model.CategoryModel

	database.DB.Find(&categories)
	var data []*model.Category

	for i := 0; i < len(categories); i++ {
		data = append(data, &model.Category{
			ID:     strconv.Itoa(int(categories[i].ID)),
			Name:   categories[i].Name,
			Parent: categories[i].Parent,
		})
	}
	return data, nil
}

func (c *categoryService) Save(category *model.CategoryModel) (*model.Category, error) {
	database.DB.Create(&category)

	return &model.Category{
		Name:   category.Name,
		Parent: category.Parent,
	}, nil
}

func (c *categoryService) FindById(id int) (*model.Category, error) {
	category := &model.CategoryModel{}
	fmt.Println(id)
	err := database.DB.Where("id = ?", id).First(category).Error
	//fmt.Println(category)
	output := &model.Category{
		ID:     strconv.Itoa(int(category.ID)),
		Name:   category.Name,
		Parent: category.Parent,
	}
	return output, err
}

func (c *categoryService) Get(id int) (*model.Category, error) {
	panic("Not implementation")
}
