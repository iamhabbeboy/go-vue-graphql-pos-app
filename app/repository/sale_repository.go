package repository

import (
	"fmt"
	"pos/database"
	"pos/graph/model"
)

type SaleRepository interface {
	Save(sale *model.SaleModel) (*model.Sale, error)
	FindAll() ([]*model.Sale, error)
}

type SaleService struct{}

func NewSaleService() *SaleService {
	return &SaleService{}
}

func (c *SaleService) Save(sale *model.SaleModel) (*model.Sale, error) {
	database.DB.Create(&sale)

	return &model.Sale{
		TotalAmount: sale.TotalAmount,
	}, nil
}

func (c *SaleService) FindAll() ([]*model.Sale, error) {
	var sales []*model.SaleModel

	database.DB.Find(&sales)

	var sale []*model.Sale

	var product productService

	for _, element := range sales {
		productId, _ := product.Get(element.ProductID)
		fmt.Println(element)
		sale = append(sale, &model.Sale{
			ID:          string(element.ID),
			Quantity:    int(element.Quantity),
			TotalAmount: element.TotalAmount,
			Product:     productId,
		})
	}

	return sale, nil
}
