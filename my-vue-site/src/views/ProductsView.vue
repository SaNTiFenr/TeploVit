<template>
  <div class="products-page">
    <!-- Шапка страницы -->
    <div class="page-header">
      <h1>Наша продукция</h1>
      <div class="header-divider"></div>
      <p class="page-description">
        Широкий ассортимент качественного оборудования для систем отопления и водоснабжения
      </p>
    </div>

    <!-- Фильтры и сортировка -->
    <div class="products-controls">
      <div class="filter-section">
        <select v-model="selectedCategory" class="filter-select">
          <option value="all">Все категории</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">
            {{ category.name }}
          </option>
        </select>
        
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Поиск по названию..."
            class="search-input"
          >
          <button class="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#131d82" stroke-width="2"/>
              <path d="M21 21L16.65 16.65" stroke="#131d82" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="sort-section">
        <span class="sort-label">Сортировка:</span>
        <select v-model="sortOption" class="sort-select">
          <option value="name-asc">По названию (А-Я)</option>
          <option value="name-desc">По названию (Я-А)</option>
          <option value="price-asc">По цене (сначала дешевле)</option>
          <option value="price-desc">По цене (сначала дороже)</option>
        </select>
      </div>
    </div>

    <!-- Список товаров -->
    <div class="products-grid">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id" 
        class="product-card"
        @click="showProductDetails(product)"
      >
        <div class="product-image-container">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div v-if="product.isNew" class="product-badge">Новинка</div>
        </div>
        
        <div class="product-info">
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-category">{{ getCategoryName(product.category_id) }}</p>
          
          <div class="product-specs">
            <div class="spec-item" v-for="spec in product.specs.slice(0, 2)" :key="spec.key">
              <span class="spec-key">{{ spec.key }}:</span>
              <span class="spec-value">{{ spec.value }}</span>
            </div>
          </div>
          
          <div class="product-footer">
            <span class="product-price">{{ formatPrice(product.price) }} руб.</span>
            <button class="product-button" @click.stop="addToCart(product)">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <div class="pagination">
      <button 
        v-for="page in totalPages" 
        :key="page" 
        class="page-button"
        :class="{ 'active': currentPage === page }"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
    </div>

    <!-- Модальное окно с деталями товара -->
    <div v-if="selectedProduct" class="modal-overlay" @click.self="closeModal">
      <div class="product-modal">
        <button class="modal-close" @click="closeModal">×</button>
        
        <div class="modal-content">
          <div class="modal-images">
            <img :src="selectedProduct.image" :alt="selectedProduct.name" class="main-image">
            <div class="thumbnails">
              <img 
                v-for="(img, index) in selectedProduct.images" 
                :key="index" 
                :src="img" 
                @click="selectedImage = img"
                class="thumbnail"
                :class="{ 'active': selectedImage === img }"
              >
            </div>
          </div>
          
          <div class="modal-details">
            <h2>{{ selectedProduct.name }}</h2>
            <p class="modal-category">{{ getCategoryName(selectedProduct.category_id) }}</p>
            
            <div class="price-section">
              <span class="modal-price">{{ formatPrice(selectedProduct.price) }} руб.</span>
              <span v-if="selectedProduct.oldPrice" class="modal-old-price">
                {{ formatPrice(selectedProduct.oldPrice) }} руб.
              </span>
            </div>
            
            <div class="modal-specs">
              <div class="spec-row" v-for="spec in selectedProduct.specs" :key="spec.key">
                <span class="spec-name">{{ spec.key }}:</span>
                <span class="spec-value">{{ spec.value }}</span>
              </div>
            </div>
            
            <p class="modal-description">{{ selectedProduct.description }}</p>
            
            <div class="modal-actions">
              <div class="quantity-control">
                <button @click="decreaseQuantity">-</button>
                <span>{{ quantity }}</span>
                <button @click="increaseQuantity">+</button>
              </div>
              <button class="add-to-cart" @click="addSelectedToCart">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'all',
      searchQuery: '',
      sortOption: 'name-asc',
      currentPage: 1,
      itemsPerPage: 8,
      quantity: 1,
      selectedProduct: null,
      selectedImage: '',
      categories: [
        { id: 1, name: 'Газовые котлы' },
        { id: 2, name: 'Твердотопливные котлы' },
        { id: 3, name: 'Электрические котлы' },
        { id: 4, name: 'Радиаторы' },
        { id: 5, name: 'Теплые полы' },
        { id: 6, name: 'Бойлеры' },
      ],
      products: [
        {
          id: 1,
          name: 'Газовый котел Baxi Eco Compact 24F',
          category_id: 1,
          price: 245000,
          oldPrice: 259900,
          isNew: true,
          image: 'https://example.com/baxi-eco-compact.jpg',
          images: [
            'https://example.com/baxi-eco-compact-1.jpg',
            'https://example.com/baxi-eco-compact-2.jpg',
            'https://example.com/baxi-eco-compact-3.jpg'
          ],
          specs: [
            { key: 'Мощность', value: '24 кВт' },
            { key: 'КПД', value: '92.5%' },
            { key: 'Тип камеры', value: 'Закрытая' },
            { key: 'Габариты', value: '730x400x299 мм' }
          ],
          description: 'Настенный газовый котел с закрытой камерой сгорания и высоким КПД. Идеальное решение для отопления частного дома площадью до 240 м².'
        },
        // Другие товары...
      ]
    }
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      
      // Фильтрация по категории
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category_id == this.selectedCategory);
      }
      
      // Поиск по названию
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(query)
        );
      }
      
      // Сортировка
      const [sortField, sortDirection] = this.sortOption.split('-');
      filtered.sort((a, b) => {
        if (sortField === 'price') {
          return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
        } else {
          return sortDirection === 'asc' 
            ? a.name.localeCompare(b.name) 
            : b.name.localeCompare(a.name);
        }
      });
      
      // Пагинация
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return filtered.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    }
  },
  methods: {
    getCategoryName(id) {
      const category = this.categories.find(c => c.id == id);
      return category ? category.name : '';
    },
    formatPrice(price) {
      return new Intl.NumberFormat('ru-RU').format(price);
    },
    showProductDetails(product) {
      this.selectedProduct = product;
      this.selectedImage = product.image;
      this.quantity = 1;
    },
    closeModal() {
      this.selectedProduct = null;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    addToCart(product) {
      // Логика добавления в корзину
      console.log('Добавлено в корзину:', product);
    },
    addSelectedToCart() {
      if (this.selectedProduct) {
        const item = {
          product: this.selectedProduct,
          quantity: this.quantity
        };
        this.addToCart(item);
        this.closeModal();
      }
    }
  }
}
</script>

<style scoped>
.products-page {
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  color: #131d82;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.header-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, #131d82, #f35d22);
  margin: 0 auto 1.5rem;
}

.page-description {
  color: #555;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
}

.products-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.filter-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}

.search-box {
  display: flex;
  flex-grow: 1;
  max-width: 400px;
}

.search-input {
  flex-grow: 1;
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px 0 0 6px;
  font-size: 0.9rem;
}

.search-button {
  background-color: white;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 6px 6px 0;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #f5f5f0;
}

.filter-select,
.sort-select {
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: white;
  cursor: pointer;
}

.sort-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-label {
  color: #555;
  font-size: 0.9rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.product-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f35d22;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  color: #131d82;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  min-height: 3rem;
}

.product-category {
  color: #f35d22;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.product-specs {
  margin: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0.8rem 0;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.spec-item:last-child {
  margin-bottom: 0;
}

.spec-key {
  color: #777;
}

.spec-value {
  color: #131d82;
  font-weight: 500;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.product-price {
  color: #131d82;
  font-weight: bold;
  font-size: 1.1rem;
}

.product-button {
  background-color: #131d82;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.product-button:hover {
  background-color: #f35d22;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-button {
  background-color: white;
  border: 1px solid #ddd;
  color: #555;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.page-button:hover {
  border-color: #131d82;
  color: #131d82;
}

.page-button.active {
  background-color: #131d82;
  color: white;
  border-color: #131d82;
}

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.product-modal {
  background-color: white;
  border-radius: 8px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
  z-index: 10;
}

.modal-close:hover {
  color: #f35d22;
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.modal-images {
  margin-bottom: 1.5rem;
}

.main-image {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 6px;
}

.thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.thumbnail:hover,
.thumbnail.active {
  border-color: #f35d22;
}

.modal-details h2 {
  color: #131d82;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.modal-category {
  color: #f35d22;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.modal-price {
  color: #131d82;
  font-size: 1.5rem;
  font-weight: bold;
}

.modal-old-price {
  color: #777;
  text-decoration: line-through;
  font-size: 1.1rem;
}

.modal-specs {
  margin: 1.5rem 0;
}

.spec-row {
  display: flex;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.spec-name {
  color: #777;
  width: 150px;
  flex-shrink: 0;
}

.spec-value {
  color: #333;
  font-weight: 500;
}

.modal-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.modal-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-control button {
  background-color: #f5f5f0;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-control button:hover {
  background-color: #e0e0e0;
}

.quantity-control span {
  width: 50px;
  text-align: center;
}

.add-to-cart {
  background-color: #131d82;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  flex-grow: 1;
}

.add-to-cart:hover {
  background-color: #f35d22;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .products-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-box {
    max-width: none;
  }
  
  .modal-content {
    padding: 1.5rem;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .add-to-cart {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .modal-content {
    flex-direction: row;
  }

  .products-page{
    padding: 0%;
  }

  .modal-images {
    width: 50%;
    padding-right: 1.5rem;
    margin-bottom: 0;
  }
  
  .modal-details {
    width: 50%;
    padding-left: 1.5rem;
  }
  .filter-select,
  .sort-select{
    padding: 0px;
  }
}
</style>