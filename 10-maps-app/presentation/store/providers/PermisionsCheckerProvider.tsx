import { PermissionStatus } from '@/infrastructure/interfaces/location'
import { router } from 'expo-router'
import React, { PropsWithChildren, useEffect } from 'react'
import { usePermissionsStore } from '../usePermissions'

const PermisionsCheckerProvider = ({ children }: PropsWithChildren) => {
    const { locationStatus, checkLocationPermission }= usePermissionsStore()

    useEffect(() => {
        if (locationStatus === PermissionStatus.GRANTED) {
            router.replace('/map')
        } else if (locationStatus !== PermissionStatus.CHECKING) {
            router.replace('/permissions')
        }
    }, [locationStatus])
    
    
    useEffect(() => {
      checkLocationPermission()
    }, [])
    
  return <>{children}</>
}

export default PermisionsCheckerProvider