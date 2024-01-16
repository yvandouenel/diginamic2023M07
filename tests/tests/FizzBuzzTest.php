<?php

use PHPUnit\Framework\TestCase;
use Yvandouenel\Tests\FizzBuzz;

class FizzBuzzTest extends TestCase
{
  protected FizzBuzz $fizzBuzz;
  protected function setUp(): void
  {
    $this->fizzBuzz = new FizzBuzz();
  }
  public function testOneForOne()
  {
    $this->assertEquals(1, $this->fizzBuzz->getFizzBuzz(1));
  }
  public function testTwoForTwo()
  {
    $this->assertEquals(2, $this->fizzBuzz->getFizzBuzz(2));
  }
  public function testFizzForThree()
  {
    $this->assertEquals("Fizz", $this->fizzBuzz->getFizzBuzz(3));
  }
  public function testBuzzForFive()
  {
    $this->assertEquals("Buzz", $this->fizzBuzz->getFizzBuzz(5));
  }
  public function testFizzBuzzForFifteen()
  {
    $this->assertEquals("FizzBuzz", $this->fizzBuzz->getFizzBuzz(15));
  }
  public function testFizzBuzzFromOneToHundred()
  {
    for ($i = 1; $i <= 100; $i++) {
      if (($i % 3 == 0) && ($i % 5  == 0)) $this->assertEquals("FizzBuzz", $this->fizzBuzz->getFizzBuzz($i));
      else if ($i % 3 == 0) $this->assertEquals("Fizz", $this->fizzBuzz->getFizzBuzz($i));
      else if ($i % 5 == 0) $this->assertEquals("Buzz", $this->fizzBuzz->getFizzBuzz($i));
      else $this->assertEquals($i, $this->fizzBuzz->getFizzBuzz($i));
    }
  }
}
