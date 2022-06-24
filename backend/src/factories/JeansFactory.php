<?php

class JeansFactory implements ClothingFactory
{

    public function createClothes(): Clothes
    {
        return new Jeans();
    }
}