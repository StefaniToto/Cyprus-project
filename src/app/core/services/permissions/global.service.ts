import { Injectable } from '@angular/core';
import { PermissionBase, PermissionType, Role } from '../../models/ERoles';
import { PermissionsFactory } from './FPermissions';




@Injectable(
    {providedIn: 'root'}
)
export class PermissionManagerService {  
  private permissions: PermissionBase;
  constructor() { }


  isGranted(permission: PermissionType) {
    const permissions = PermissionsFactory.getInstance().permissions;
    // console.log("permissions isGranted" ,permissions)
    for (let perm of permissions) {
      if (perm === permission){
        return true;
      }
    }
    return false;
  }  authAs(role: Role) {   
    localStorage.setItem('role',
      (role === null)
        ? Role.Unknown
        : role
    );
    this.permissions = PermissionsFactory.getInstance();
  }
}