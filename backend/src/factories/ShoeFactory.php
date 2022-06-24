<?php

class ShoeFactory implements ClothingFactory
{
    public function createClothes(): Clothes
    {
        return new Shoes();
    }
}