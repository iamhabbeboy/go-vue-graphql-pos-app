package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"pos/database"
	"pos/graph/generated"
	"pos/graph/model"
)

func (r *mutationResolver) CreateProduct(ctx context.Context, input model.NewProduct) (*model.Product, error) {
	//panic(fmt.Errorf("not implemented"))
	product := &model.Product{
		Name:  input.Name,
		Price: input.Price,
	}
	r.products = append(r.products, product)

	return product, nil
}

func (r *mutationResolver) CreateCategory(ctx context.Context, input model.NewCategory) (*model.Category, error) {
	//panic(fmt.Errorf("not implemented"))
	var category *model.CategoryModel

	category = &model.CategoryModel{
		Name:   input.Name,
		Parent: input.Parent,
	}

	res := database.Save(category)

	return res, nil
}

func (r *queryResolver) Products(ctx context.Context) ([]*model.Product, error) {
	//panic(fmt.Errorf("not implemented"))
	return r.products, nil
}

func (r *queryResolver) Categories(ctx context.Context) ([]*model.Category, error) {
	rows := database.GetAll()

	return rows, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
