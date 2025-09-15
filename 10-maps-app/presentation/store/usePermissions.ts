import { checkLocationPermission, requesLocationPermission } from '@/core/actions/location'
import { PermissionStatus } from '@/infraestructure/interfaces/location'
import { create } from 'zustand'

interface PermissionState {
    locationStatus: PermissionStatus
    requestLocationPermission: () => Promise<PermissionStatus>
    checkLocationPermission: () => Promise<PermissionStatus>
}

export const usePermissionStore = create<PermissionState>()((set) =>({
    locationStatus: PermissionStatus.CHECKING,
    requestLocationPermission: async() => {
        const status =  await requesLocationPermission()
        set({locationStatus: status})
        return PermissionStatus.GRANTED
    },
    checkLocationPermission: async() => {
        const status = await checkLocationPermission()
        set({locationStatus: status})
        return PermissionStatus.LIMITED
    }
}))