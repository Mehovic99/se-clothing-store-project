<?php

class ShirtFactory implements ClothingFactory
{
    public function createClothes(): Clothes
    {
        return new Shirts();
    }
}