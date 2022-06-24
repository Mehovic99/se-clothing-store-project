<?php

class JacketFactory implements ClothingFactory
{
    public function createClothes(): Clothes
    {
        return new Jacket();
    }
}