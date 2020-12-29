<?php

namespace App\Twig;

use KnpU\LoremIpsumBundle\KnpUIpsum;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class LoremExtensionTwig extends AbstractExtension
{
    private KnpUIpsum $ligs;

    public function __construct(KnpUIpsum $ligs)
    {
        $this->ligs = $ligs;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('generate_lorem_ipsum_by_words', [$this, 'generateLoremIpsumByWords']),
            new TwigFunction('generate_lorem_ipsum_by_sentences', [$this, 'generateLoremIpsumBySentences']),
            new TwigFunction('generate_lorem_ipsum_by_paragraphs', [$this, 'generateLoremIpsumByParagraphs']),
        ];
    }

    public function generateLoremIpsumByWords(int $count = 3): string
    {
        return $this->ligs->getWords($count);
    }

    public function generateLoremIpsumBySentences(int $count = 3): string
    {
        return $this->ligs->getSentences($count);
    }

    public function generateLoremIpsumByParagraphs(int $count = 3): string
    {
        return $this->ligs->getParagraphs($count);
    }
}
