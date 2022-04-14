package graph

import "pos/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	products   []*model.Product
	categories []*model.Category
}
