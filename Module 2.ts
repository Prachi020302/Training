// Define a class for managing inventory
class InventoryManager {
    private inventory: Map<string, number>;

    constructor() {
        // Initialize inventory with some products and quantities
        this.inventory = new Map<string, number>([
            ['product1', 10],
            ['product2', 15],
            ['product3', 3],
            // Add more products as needed
        ]);
    }

    // Method to process a purchase
    processPurchase(productName: string, quantity: number): void {
        if (this.inventory.has(productName)) {
            const currentQuantity = this.inventory.get(productName) || 0;
            if (currentQuantity >= quantity) {
                // Reduce quantity
                this.inventory.set(productName, currentQuantity - quantity);
                console.log(`Purchase processed: ${quantity} ${productName}(s) sold.`);
                // Check if reorder is required
                if (currentQuantity - quantity < 5) {
                    console.log(`Reorder request raised for ${productName}.`);
                    // Send reorder request to supplier
                    this.sendReorderRequest(productName);
                }
            } else {
                console.log(`Insufficient quantity of ${productName} available.`);
            }
        } else {
            console.log(`Product ${productName} not found in inventory.`);
        }
    }

    // Method to send reorder request to supplier
    private sendReorderRequest(productName: string): void {
        // Code to send reorder request to supplier goes here
        console.log(`Reorder request sent for ${productName}.`);
    }

    // Method to add new product to inventory
    addProduct(productName: string, quantity: number): void {
        if (!this.inventory.has(productName)) {
            this.inventory.set(productName, quantity);
            console.log(`Product ${productName} added to inventory with quantity ${quantity}.`);
        } else {
            console.log(`Product ${productName} already exists in inventory.`);
        }
    }

    // Method to remove product from inventory
    removeProduct(productName: string): void {
        if (this.inventory.has(productName)) {
            this.inventory.delete(productName);
            console.log(`Product ${productName} removed from inventory.`);
        } else {
            console.log(`Product ${productName} not found in inventory.`);
        }
    }

    // Method to display current inventory
    displayInventory(): void {
        console.log('Current Inventory:');
        for (const [productName, quantity] of this.inventory) {
            console.log(`${productName}: ${quantity}`);
        }
    }
}

// Example usage
const inventoryManager = new InventoryManager();

// Process a purchase
inventoryManager.processPurchase('product1', 3);
inventoryManager.processPurchase('product2', 7); // Quantity exceeds available
inventoryManager.processPurchase('product3', 2);

// Add new product
inventoryManager.addProduct('product4', 20);

// Remove a product
inventoryManager.removeProduct('product1');

// Display current inventory
inventoryManager.displayInventory();
