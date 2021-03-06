import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SelectValueService {
    public static shoeSizes = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 
        10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5];

    public static heights = [
        "4'1", "4'2", "4'3", "4'4", "4'5", "4'6", "4'7", "4'8", "4'9", "4'10", "4'11", "4'12", "4'0",
        "5'0", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", "5'12",
        "6'0", "6'1", "6'2", "6'3", "6'4", "6'5", "6'6", "6'7", "6'8", "6'9", "6'10", "6'11", "6'12",
        "7'0", "7'1", "7'2", "7'3", "7'4", "7'5", "7'6", "7'7", "7'8", "7'9", "7'10", "7'11", "7'12"
    ]

    public static states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL',
        'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA',
        'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE',
        'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR',
        'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI',
        'WV', 'WY']

    public static painPoints =
        ["Left Wrist", "Right Wrist", "Left Elbow", "Right Elbow", "Left Anterior Shoulder", "Right Anterior Shoulder", 
        "Left Hip", "Right Hip", "Left Knee", "Right Knee", "Posterior Left Shoulder", "Posterior Right Shoulder", "Neck", 
        "Upper Middle Back", "Middle Back", "Lower Back", "Left Occipital", "Right Occipital", "Frontal or Forehead", "Left Ankle", "Right Ankle"]

}