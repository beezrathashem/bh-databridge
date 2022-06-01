declare const MEDIA_JOB_PARAMS: (videoId: string, lectureId: string, actionType?: "complete" | "skip") => {
    Queue: string | undefined;
    UserMetadata: {
        lectureId: string;
        videoId: string;
        project: string | undefined;
        actionType: "complete" | "skip";
    };
    Role: string | undefined;
    Settings: {
        TimecodeConfig: {
            Source: string;
        };
        OutputGroups: {
            Name: string;
            Outputs: {
                ContainerSettings: {
                    Container: string;
                    M3u8Settings: {
                        AudioFramesPerPes: number;
                        PcrControl: string;
                        PmtPid: number;
                        PrivateMetadataPid: number;
                        ProgramNumber: number;
                        PatInterval: number;
                        PmtInterval: number;
                        Scte35Source: string;
                        NielsenId3: string;
                        TimedMetadata: string;
                        VideoPid: number;
                        AudioPids: number[];
                    };
                };
                VideoDescription: {
                    ScalingBehavior: string;
                    TimecodeInsertion: string;
                    AntiAlias: string;
                    Sharpness: number;
                    CodecSettings: {
                        Codec: string;
                        H264Settings: {
                            InterlaceMode: string;
                            NumberReferenceFrames: number;
                            Syntax: string;
                            Softness: number;
                            GopClosedCadence: number;
                            GopSize: number;
                            Slices: number;
                            GopBReference: string;
                            MaxBitrate: number;
                            SlowPal: string;
                            EntropyEncoding: string;
                            FramerateControl: string;
                            RateControlMode: string;
                            QvbrSettings: {
                                QvbrQualityLevel: number;
                                QvbrQualityLevelFineTune: number;
                            };
                            CodecProfile: string;
                            Telecine: string;
                            MinIInterval: number;
                            AdaptiveQuantization: string;
                            CodecLevel: string;
                            FieldEncoding: string;
                            SceneChangeDetect: string;
                            QualityTuningLevel: string;
                            FramerateConversionAlgorithm: string;
                            UnregisteredSeiTimecode: string;
                            GopSizeUnits: string;
                            ParControl: string;
                            NumberBFramesBetweenReferenceFrames: number;
                            RepeatPps: string;
                            DynamicSubGop: string;
                        };
                    };
                    AfdSignaling: string;
                    DropFrameTimecode: string;
                    RespondToAfd: string;
                    ColorMetadata: string;
                };
                AudioDescriptions: {
                    AudioTypeControl: string;
                    CodecSettings: {
                        Codec: string;
                        AacSettings: {
                            AudioDescriptionBroadcasterMix: string;
                            Bitrate: number;
                            RateControlMode: string;
                            CodecProfile: string;
                            CodingMode: string;
                            RawFormat: string;
                            SampleRate: number;
                            Specification: string;
                        };
                    };
                    LanguageCodeControl: string;
                }[];
                OutputSettings: {
                    HlsSettings: {
                        AudioGroupId: string;
                        AudioOnlyContainer: string;
                        IFrameOnlyManifest: string;
                    };
                };
                NameModifier: string;
            }[];
            OutputGroupSettings: {
                Type: string;
                HlsGroupSettings: {
                    ManifestDurationFormat: string;
                    SegmentLength: number;
                    TimedMetadataId3Period: number;
                    CaptionLanguageSetting: string;
                    Destination: string;
                    TimedMetadataId3Frame: string;
                    CodecSpecification: string;
                    OutputSelection: string;
                    ProgramDateTimePeriod: number;
                    MinSegmentLength: number;
                    MinFinalSegmentLength: number;
                    DirectoryStructure: string;
                    ProgramDateTime: string;
                    SegmentControl: string;
                    ManifestCompression: string;
                    ClientCache: string;
                    AudioOnlyHeader: string;
                    StreamInfResolution: string;
                };
            };
        }[];
        AdAvailOffset: number;
        Inputs: {
            AudioSelectors: {
                'Audio Selector 1': {
                    Offset: number;
                    DefaultSelection: string;
                    ProgramSelection: number;
                };
            };
            VideoSelector: {
                ColorSpace: string;
                Rotate: string;
                AlphaBehavior: string;
            };
            FilterEnable: string;
            PsiControl: string;
            FilterStrength: number;
            DeblockFilter: string;
            DenoiseFilter: string;
            InputScanType: string;
            TimecodeSource: string;
            FileInput: string;
        }[];
    };
    AccelerationSettings: {
        Mode: string;
    };
    StatusUpdateInterval: string;
    Priority: number;
};
export default MEDIA_JOB_PARAMS;
//# sourceMappingURL=mediaConvertCreateJob.d.ts.map