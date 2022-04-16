package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"pos/graph/generated"
	"pos/graph/model"
)

func (r *mutationResolver) CreateProduct(ctx context.Context, input model.NewProduct) (*model.Product, error) {
	var product *model.ProductModel

	product = &model.ProductModel{
		Name:        input.Name,
		Price:       input.Price,
		Description: input.Description,
		Stock:       input.Stock,
		//CategoryID:  strconv.ParseInt(int64(input.Category)),
	}
	response, _ := r.ProductRepository.Save(product)

	return response, nil
}

func (r *mutationResolver) CreateCategory(ctx context.Context, input model.NewCategory) (*model.Category, error) {
	var category *model.CategoryModel

	category = &model.CategoryModel{
		Name:   input.Name,
		Parent: input.Parent,
	}

	rows, _ := r.CategoryRepository.Save(category)

	return rows, nil
}

func (r *queryResolver) Products(ctx context.Context) ([]*model.Product, error) {
	//return r.products, nil
	panic("not implemented")
}

func (r *queryResolver) Categories(ctx context.Context) ([]*model.Category, error) {
	rows, _ := r.CategoryRepository.FindAll()

	return rows, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
