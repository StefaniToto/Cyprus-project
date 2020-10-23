import { Component, ComponentRef, ComponentFactory } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

export class Module {
    title: string;
    img: string;
    url: string;
    created?: boolean;
    openCreateModal?: FunctionStringCallback;
}