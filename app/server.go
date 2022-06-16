package main

import (
	"log"
	"net/http"
	"os"
	"pos/database"
	"pos/graph"
	"pos/graph/generated"
	"pos/graph/model"
	"pos/repository"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	/**
	 * Connect to Database
	 * Register migration
	 */
	database.Connect(&model.CategoryModel{}, &model.ProductModel{}, &model.SaleModel{})

	/**
	* Instantiate Services
	 */
	var category repository.CategoryRepository = repository.NewCategoryService()
	var product repository.ProductRepository = repository.NewProductService()
	var sale repository.SaleRepository = repository.NewSaleService()

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{
		CategoryRepository: category,
		ProductRepository:  product,
		SaleRepository:     sale,
	}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func cors(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		h(w, r)
	}
}
