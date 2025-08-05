import { checkLocationPermission, requestLocationPermission } from '@/core/actions/permissions/location'
import { PermissionStatus } from '@/infrastructure/interfaces/location'
import { create } from 'zustand'

interface PermissionState {
    locationStatus : PermissionStatus
    requestLocationPermission: () => Promise<PermissionStatus>
    checkLocationPermission: () => Promise<PermissionStatus>
}

export const usePermissionsStore = create<PermissionState>()((set) => ({
    LocationStauts: PermissionStatus.CHECKING,
    requestLocationPermission: async() => {
        const status = await requestLocationPermission()
        set({locationStatus: status})
        return status
    },

    checkingLocationPermission: async () => {
        const status = await checkLocationPermission()
        set({locationStatus: status})
        return status
    }
}))