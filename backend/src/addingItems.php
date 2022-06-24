<?php

/* Import products */
require_once 'products/Clothes.php';
require_once 'products/Shoes.php';
require_once 'products/Shirts.php';
require_once 'products/Jacket.php';
require_once 'products/Jeans.php';

/* Import factories */
require_once 'factories/ClothingFactory.php';
require_once 'factories/ShoeFactory.php';
require_once 'factories/ShirtFactory.php';
require_once 'factories/JacketFactory.php';
require_once 'factories/JeansFactory.php';

/**
 * Environment setup.
 */
$choiceOfDelivery = 'shirt';

switch ($choiceOfDelivery) {
    case 'shoe':
        $deliveryProvider = new ShoeFactory();
        break;
    case 'shirt':
        $deliveryProvider = new ShirtFactory();
        break;
    case 'jacket':
        $deliveryProvider = new JacketFactory();
        break;
    case 'jeans':
        $deliveryProvider = new JeansFactory();
        break;
    default:
        $deliveryProvider = new ShirtFactory(); // Shirts are the most standard piece of wardrobe, so it is standard
}

/**
 * Deliver the product to the client.
 * The client treats all the products as abstract Transport.
 */
$deliveryItem = $deliveryProvider->createClothes();
$deliveryItem->deliver();