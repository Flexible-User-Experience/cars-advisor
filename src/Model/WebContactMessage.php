<?php

namespace App\Model;

class WebContactMessage
{
    private string $name;
    private string $email;
    private string $message;
    private ?string $timetable;

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): WebContactMessage
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): WebContactMessage
    {
        $this->email = $email;

        return $this;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function setMessage(string $message): WebContactMessage
    {
        $this->message = $message;

        return $this;
    }

    public function getTimetable(): ?string
    {
        return $this->timetable;
    }

    public function setTimetable(?string $timetable): WebContactMessage
    {
        $this->timetable = $timetable;

        return $this;
    }

    public function __toString(): string
    {
        return $this->getName().' · '.$this->getEmail();
    }
}
