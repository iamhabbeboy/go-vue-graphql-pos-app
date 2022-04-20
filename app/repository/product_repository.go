package repository

import (
	"pos/database"
	"pos/graph/model"
	"strconv"
)

type ProductRepository interface {
	FindAll() ([]*model.Product, error)
	Save(product *model.ProductModel) (*model.Product, error)
	Get(id int) (*model.Product, error)
	FindBy(product *model.ProductModel) (*model.Product, error)
}

type productService struct{}

func NewProductService() *productService {
	return &productService{}
}

func (c *productService) FindAll() ([]*model.Product, error) {
	var products []*model.ProductModel

	database.DB.Find(&products)

	var product []*model.Product

	var category categoryService

	for i := 0; i < len(products); i++ {
		categoryId := products[i].CategoryID
		categoryData, _ := category.FindById(categoryId)

		product = append(product, &model.Product{
			ID:          strconv.Itoa(int(products[i].ID)),
			Name:        products[i].Name,
			Description: products[i].Description,
			Stock:       products[i].Stock,
			Price:       products[i].Price,
			Category:    categoryData,
		})
	}
	return product, nil
}

func (c *productService) Save(product *model.ProductModel) (*model.Product, error) {
	find, _ := c.FindBy(product)
	if find.Name != "" {
		return find, nil
	}

	database.DB.Create(&product)

	return &model.Product{
		ID:   strconv.Itoa(int(product.ID)),
		Name: product.Name,
	}, nil
}

func (c *productService) FindBy(product *model.ProductModel) (*model.Product, error) {
	rows := &model.ProductModel{}
	err := database.DB.Where("name = ?", product.Name).First(rows).Error
	output := &model.Product{
		Name: rows.Name,
	}
	return output, err
}

func (c *productService) Get(id int) (*model.Product, error) {
	product := &model.Product{}
	err := database.DB.Where("id = ?", id).First(product).Error
	return product, err
}
